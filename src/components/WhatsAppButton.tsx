'use client';

import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import styles from './WhatsAppButton.module.css';

const WHATSAPP_NUMBER = '2348060157984';

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={styles.container}>
      <div className={`${styles.tooltip} ${isHovered ? styles.visible : ''}`}>
        <span className={styles.pulseRing} />
        <img 
          src="https://api.dicebear.com/9.x/notionists/svg?seed=Phil&backgroundColor=1a365d" 
          alt="Phil" 
          className={styles.avatar} 
        />
        <span className={styles.nameTag}>Phil</span>
      </div>
      
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%2C%20I%27m%20interested%20in%20Philstone%20Consulting%27s%20services`}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsappButton}
        aria-label="Chat on WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className={styles.avatarSmall}>
          <img 
            src="https://api.dicebear.com/9.x/notionists/svg?seed=Phil&backgroundColor=1a365d" 
            alt="Phil" 
          />
        </span>
        <span className={styles.chatText}>Chat with Phil</span>
        <MessageCircle size={20} />
      </a>
    </div>
  );
}
