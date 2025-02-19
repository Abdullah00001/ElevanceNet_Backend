const verificationEmailTemplate = `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Verification - Elevancenet</title>
    <style>
        body {
            background-color: #f4f4f4;
            font-family: Arial, sans-serif;
            color: #333333;
            margin: 0;
            padding: 0;
        }
        .container {
            background-color: #ffffff;
            max-width: 600px;
            margin: 40px auto;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }
        .header {
            text-align: center;
            margin-bottom: 20px;
        }
        .header h1 {
            color: #1D9BF0;
            font-size: 24px;
            margin: 0;
        }
        .content {
            margin-bottom: 20px;
            line-height: 1.6;
        }
        .content p {
            margin: 10px 0;
        }
        .otp-box {
            display: inline-block;
            background-color: #1D9BF0;
            padding: 15px 30px;
            color: #ffffff;
            font-size: 28px;
            font-weight: bold;
            margin: 20px 0;
            border-radius: 8px;
            text-align: center;
        }
        .warning {
            color: #F5212E;
            font-weight: bold;
            margin: 15px 0;
        }
        a {
            color: #1D9BF0;
            text-decoration: none;
            font-weight: bold;
        }
        a:hover {
            text-decoration: underline;
        }
        hr {
            border: 0;
            border-top: 1px solid #e0e0e0;
            margin: 20px 0;
        }
        .footer {
            font-size: 12px;
            color: #777777;
            margin-top: 20px;
            text-align: center;
        }
        .footer a {
            font-size: 12px;
            color: #1D9BF0;
        }
        .footer p {
            margin: 5px 0;
        }
    </style>
</head>
<body>

<div class="container">
    <div class="header">
        <h1>Elevancenet</h1>
    </div>

    <div class="content">
        <p>Dear {{firstName}} {{lastName}},</p>
        <p>Welcome to Elevancenet! To ensure the security of your account, please verify your email by entering the One-Time Password (OTP) below:</p>
        <div class="otp-box">{{otp}}</div>
        <p>This code is valid for <strong>{{expirationTime}} minutes</strong> and can only be used once.<br/>For security reasons, please do not share this code with anyone.</p>
        <p>If you did not request this verification, you can safely ignore this email.</p>
        <p>For assistance, contact our support team at <a href="mailto:support@elevancenet.com">support@elevancenet.com</a>.</p>
    </div>
    
    <hr>
    
    <div class="footer">
        <p>From,<br><strong>Elevancenet</strong></p>
        <p>© Elevancenet Inc. | Community Support<br>123 Elevancenet Way, Dhaka Bangladesh</p>
        <p>This message was sent to {{email}}.</p>
        <p class="warning">To help keep your account secure, please do not forward or share this email. <a href="#">Learn more.</a></p>
    </div>
</div>

</body>
</html>
`;

export default verificationEmailTemplate;
