export default function generateUserCode(prefix, fullName) {
    // Extracting initials from full name
    const initials = fullName.split(' ').map(name => name.charAt(0).toUpperCase()).join('');

    // Generating timestamp (time now)
    const now = new Date();
    const timestamp = `${now.getFullYear()}${(now.getMonth() + 1).toString().padStart(2, '0')}${now.getDate().toString().padStart(2, '0')}${now.getHours().toString().padStart(2, '0')}${now.getMinutes().toString().padStart(2, '0')}${now.getSeconds().toString().padStart(2, '0')}`;

    // Combining prefix, initials, and timestamp to form the unique code
    const userCode = `${prefix}-${initials}-${timestamp}`;

    return userCode;
}

// Example usage:
const prefix = 'LFF';
const fullName = 'MUKE JOHN';
const uniqueCode = generateUserCode(prefix, fullName);
console.log(uniqueCode); // Output example: LFF-MJ-20240302143155