'use client';

import { MessageCircle } from 'lucide-react';
import styles from './WhatsAppButton.module.css';

const WHATSAPP_NUMBER = '2348060157984';

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%2C%20I%27m%20interested%20in%20Philstone%20Consulting%27s%20services`}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappButton}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}
