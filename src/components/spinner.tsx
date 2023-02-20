export default function Spinner({ className = '' }: { className?: string }) {
	return (
		<div
			className={'border-t-primary-600 animate-spin inline-block w-6 h-6 border-4 rounded-full '.concat(
				className
			)}
			role='status'></div>
	);
}
