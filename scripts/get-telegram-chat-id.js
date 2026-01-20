/**
 * Script to get Telegram group chat ID
 *
 * Instructions:
 * 1. Make sure your bot is added to the group chat
 * 2. Send any message in the group
 * 3. Run: node scripts/get-telegram-chat-id.js
 */

const BOT_TOKEN = '8404187416:AAHE-t1732dC3cGu9O2LtK112fIluozspaA';

async function getChatId() {
  try {
    const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/getUpdates`);
    const data = await response.json();

    if (!data.ok) {
      console.error('Error fetching updates:', data.description);
      return;
    }

    if (data.result.length === 0) {
      console.log('\nNo messages found.');
      console.log('Please:');
      console.log('1. Add the bot to your group chat');
      console.log('2. Send a message in the group');
      console.log('3. Run this script again\n');
      return;
    }

    console.log('\n=== Found Chats ===\n');

    const chats = new Map();

    data.result.forEach((update) => {
      if (update.message?.chat) {
        const chat = update.message.chat;
        const chatKey = `${chat.id}`;

        if (!chats.has(chatKey)) {
          chats.set(chatKey, {
            id: chat.id,
            type: chat.type,
            title: chat.title || `${chat.first_name || ''} ${chat.last_name || ''}`.trim(),
          });
        }
      }
    });

    chats.forEach((chat) => {
      console.log(`Chat ID: ${chat.id}`);
      console.log(`Type: ${chat.type}`);
      console.log(`Title: ${chat.title}`);
      console.log('---');
    });

    const groupChats = Array.from(chats.values()).filter(
      (chat) => chat.type === 'group' || chat.type === 'supergroup'
    );

    if (groupChats.length > 0) {
      console.log('\nYour group chat ID is likely one of the above.');
      console.log('Add it to your .env.local file as:');
      console.log(`TELEGRAM_CHAT_ID=${groupChats[0].id}\n`);
    }

  } catch (error) {
    console.error('Error:', error.message);
  }
}

getChatId();
