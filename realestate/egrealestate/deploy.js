const { NodeSSH } = require('node-ssh');
const ssh = new NodeSSH();

async function deploy() {
  try {
    console.log("Connecting to VPS...");
    await ssh.connect({
      host: '167.86.84.248',
      username: 'root',
      password: '2kPJXKNB7U3S'
    });

    console.log("Creating directory /opt/sites/egrealestate...");
    await ssh.execCommand('mkdir -p /opt/sites/egrealestate');

    console.log("Uploading static files from ./out to VPS...");
    const failed = [];
    const successful = [];
    await ssh.putDirectory('./out', '/opt/sites/egrealestate', {
      recursive: true,
      concurrency: 10,
      tick: function(localPath, remotePath, error) {
        if (error) {
          failed.push(localPath);
        } else {
          successful.push(localPath);
        }
      }
    });
    
    console.log(`Upload complete: ${successful.length} successful, ${failed.length} failed`);

    const nginxConfig = `
server {
    listen 80;
    server_name egrealestate.valhallala.com;
    root /opt/sites/egrealestate;
    index index.html index.htm;
    
    location / {
        try_files $uri $uri.html $uri/ /index.html;
    }
}
`;

    console.log("Configuring Nginx...");
    await ssh.execCommand(`cat << 'EOF' > /etc/nginx/sites-available/egrealestate\n${nginxConfig}\nEOF`);
    await ssh.execCommand('ln -sf /etc/nginx/sites-available/egrealestate /etc/nginx/sites-enabled/');
    
    console.log("Reloading Nginx...");
    await ssh.execCommand('systemctl reload nginx');

    console.log("Deployment completed successfully.");
    process.exit(0);
  } catch (error) {
    console.error("Deployment failed:", error);
    process.exit(1);
  }
}

deploy();
