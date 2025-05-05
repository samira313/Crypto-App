const getCurrencySymbol = (currency) => {
    switch (currency) {
      case 'USD':
        return '$';
      case 'EUR':
        return '€';
      case 'JPY':
        return '¥';
      default:
        return '$';
    }
  };
  

export default getCurrencySymbol;