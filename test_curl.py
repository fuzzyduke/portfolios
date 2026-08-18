import paramiko

ssh = paramiko.SSHClient()
ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
ssh.connect('167.86.84.248', username='root', password='2kPJXKNB7U3S')
stdin, stdout, stderr = ssh.exec_command('curl -k -s https://127.0.0.1/ -H "Host: unnisurance.valhallala.com"')
res = stdout.read().decode('utf-8', errors='ignore')
with open('vps_curl_output.txt', 'w', encoding='utf-8') as f:
    f.write(res)
print("Saved curl output to vps_curl_output.txt")
ssh.close()
