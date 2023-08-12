import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

/**
 *
 * @param  {clsx.ClassValue[]} inputs
 * @returns
 */
function merge(...inputs) {
	return twMerge(clsx(inputs));
}

export { merge };
