import os
import paramiko

host = "167.86.84.248"
user = "root"
password = "2kPJXKNB7U3S"
remote_dir = "/opt/sites/unnisurance"
local_dist = r"C:\Users\edsel\.gemini\antigravity-ide\scratch\portfolios\apps\sunil-insurance\dist"
local_nginx_conf = r"C:\Users\edsel\.gemini\antigravity-ide\scratch\portfolios\nginx_unnisurance.conf"

print("Connecting to VPS via SSH...")
ssh = paramiko.SSHClient()
ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
ssh.connect(host, username=user, password=password, port=22)

sftp = ssh.open_sftp()

print("Ensuring remote web root exists...")
try:
    sftp.mkdir(remote_dir)
except IOError:
    pass

def upload_dir(local_path, remote_path):
    for root, dirs, files in os.walk(local_path):
        rel = os.path.relpath(root, local_path)
        rem = remote_path if rel == "." else os.path.join(remote_path, rel).replace("\\", "/")
        try:
            sftp.mkdir(rem)
        except IOError:
            pass
        for f in files:
            lp = os.path.join(root, f)
            rp = os.path.join(rem, f).replace("\\", "/")
            print(f"Uploading {lp} -> {rp}")
            sftp.put(lp, rp)

upload_dir(local_dist, remote_dir)

print("Uploading Nginx configuration...")
sftp.put(local_nginx_conf, "/etc/nginx/sites-available/unnisurance.conf")

print("Enabling Nginx config and reloading Nginx...")
ssh.exec_command("ln -sf /etc/nginx/sites-available/unnisurance.conf /etc/nginx/sites-enabled/unnisurance.conf")
stdin, stdout, stderr = ssh.exec_command("nginx -t && systemctl reload nginx")
out = stdout.read().decode()
err = stderr.read().decode()
print("Nginx Output:", out)
print("Nginx Error:", err)

sftp.close()
ssh.close()
print("Deployment complete!")
