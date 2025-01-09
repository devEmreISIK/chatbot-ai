import AIProfileImage from '../assets/ai.png'
import UserProfileImage from '../assets/user.png'

export function ChatMessage({ message, sender }) {
  return (
    <div className={sender == 'user' ? 'chat-msg-user' : 'chat-msg-ai'}>
      {sender === 'ai' && (
        <img src={AIProfileImage} alt="User Profile Image" className="chat-msg-profile"/>
        )}
      <div className="chat-msg-txt">
        {message}
      </div>
      {sender === 'user' && (
        <img src={UserProfileImage} alt="User Profile Image" className="chat-msg-profile"/>
        )}
    </div>
  );
}