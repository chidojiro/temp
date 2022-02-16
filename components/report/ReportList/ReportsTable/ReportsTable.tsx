import { ClassName } from '@/types';
import { ChatbotTable } from './ChatbotTable';
import { LineMailTable } from './LineMailTable';
import { PopupTable } from './PopupTable';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = ClassName & { policyType: string };

// eslint-disable-next-line no-empty-pattern
export const ReportsTable = ({ policyType, className }: Props) => {
  if (policyType === 'chatbot') return <ChatbotTable className={className} />;
  if (policyType === 'popup') return <PopupTable className={className} />;
  if (policyType === 'line-email') return <LineMailTable className={className} />;

  return null;
};
