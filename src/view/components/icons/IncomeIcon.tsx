interface IncomeIconProps {
  color: string;
}

export function IncomeIcon({ color }: IncomeIconProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.259 18.3478H6.4217C4.53397 18.3478 3.35986 17.0159 3.35986 15.1309V8.02841C3.35986 6.14349 4.53397 4.81152 6.42076 4.81152H17.579C19.4601 4.81152 20.6399 6.14349 20.6399 8.02841V9.94693M16.5376 15.5514L18.5887 13.5002M18.5887 13.5002L20.639 15.5514M18.5887 13.5002L18.589 18.348M6.44409 8.17334H7.791M9.80261 11.5806C9.80261 10.3673 10.7862 9.38467 11.9986 9.38467C13.2119 9.38467 14.1954 10.3673 14.1954 11.5806C14.1954 12.7939 13.2119 13.7766 11.9986 13.7766C10.7862 13.7766 9.80261 12.7939 9.80261 11.5806Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
