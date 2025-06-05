export const chargeStudent = (morning: boolean, evening: boolean) => {
  if (morning && evening) return 15000;
  if (morning || evening) return 10000;
  return 0;
};
