import { ClassName } from '@/types';
import { ChatbotTable } from './ChatbotTable';
import { LineMailTable } from './LineMailTable';
import { PopupTable } from './PopupTable';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = ClassName & { policyType: 'lineEmail' | 'chatbot' | 'popUp' };

// eslint-disable-next-line no-empty-pattern
export const ReportsTable = ({ policyType, className }: Props) => {
  if (policyType === 'chatbot') return <ChatbotTable className={className} />;
  if (policyType === 'popUp') return <PopupTable className={className} />;
  if (policyType === 'lineEmail') return <LineMailTable className={className} />;

  return null;
};
