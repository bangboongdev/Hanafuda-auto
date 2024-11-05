# Update 
Hướng dẫn tham gia airdrop #Hana_Network 

1. Đăng ký tài khoản:

Truy cập link : https://hanafuda.hana.network 

Đăng ký bằng tài khoản Google.

Mã mời: 1PUZN5 (sử dụng mã này để kích hoạt tài khoản và tăng cơ hội nhận thưởng).

Sau khi login thành công và connect ví chọn F12 mở tab console

Paste đoạn code sau : const token= JSON.parse(sessionStorage.getItem('firebase:authUser:AIzaSyDipzN0VRfTPnMGhQ5PSzO27Cxm3DohJGY:[DEFAULT]'));
const refreshToken = token.stsTokenManager.refreshToken;
copy(refreshToken);

để copy refresh_token điền vào cột refresh_token trong file hana.csv ( đổi tên hana_example.csv sang hana.csv) không tự ý sửa cột 

Điền file hana.csv
    - id từ 1 -> n
    - active = 1 để run
    - private_key để deposit
    - proxy_url có dạng http://username:password@ip:port
    - refresh_token : paste refresh_token đã copy ở trên 

=> Run code node main.js

Done


