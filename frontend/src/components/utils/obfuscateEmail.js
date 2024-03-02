export const obfuscateEmail = (email) => {
    const [localPart, domain] = email.split('@');
    if (localPart.length > 2) {
      // Show the first three characters, a series of asterisks, and the last two characters of the local part
      const visibleStart = localPart.substring(0, 3);
      const visibleEnd = localPart.substring(localPart.length - 1, localPart.length);
      const obfuscatedLocalPart = `${visibleStart}******${visibleEnd}`;
      return `${obfuscatedLocalPart}@${domain}`;
    }
    return email;
  };
  