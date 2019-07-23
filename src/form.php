<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $msg = $_POST['msg'];
    
    $mail_message = '
    <html>
    <head>
        <title>Заявка с сайта Портфолио</title>
    </head>
    <body>
        <h2>Заявка с сайта Портфолио</h2>
        <ul>
            <li>Имя:' . $name . '</li>
            <li>Email: ' . $imail . '</li>
            <li>Сообщение: ' . $msg . '</li>
        </ul>
    </body>
    </html>';
    $headers = "From: Администратор сайта <admin@front-dev.com>\r\n".
                "MIME-Version: 1.0" . "\r\n" .
                "Content-type: text/html; charset=UTF-8" . "\r\n";
    $mail = mail('vankert353@gmail.com', 'Заявка с Портфолио', $mail_message, $headers);
?>