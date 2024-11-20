export default function generateCouponCode(title='', expiryDate='') {
    // Convert title to uppercase and remove spaces
    const formattedTitle = title.toUpperCase().replace(/\s/g, '');
  
    // Convert expiry date to the desired format
    const formattedExpiryDate = expiryDate.split('-').reverse().join('');
  
    // Combine formatted title and expiry date to generate the coupon code
    const couponCode = `${formattedTitle}-${formattedExpiryDate}`;
  
    return couponCode;
  }