import axios from "axios";

const TELEGRAM_BOT_TOKEN =import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

export const sendTelegramMessage = async (message) => {
    try {
        await axios.post(TELEGRAM_API_URL, {
            chat_id: TELEGRAM_CHAT_ID,
            text: message,
        });
        console.log('Message sent to Telegram successfully');
    } catch (error) {
        console.error('Error sending message to Telegram', error);
    }
};
