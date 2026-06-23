export default function LoadingBookDetails() {
  return (
    <div className='p-8 max-w-2xl mx-auto animate-pulse mt-12'>
      <div className='h-12 bg-muted border border-border rounded-none w-3/4 mb-4'></div>

      <div className='h-6 bg-muted/65 rounded-none w-1/3 mb-8'></div>

      <div className='space-y-4 border-t border-border pt-6 mt-6'>
        <div className='h-4 bg-muted rounded-none w-1/4'></div>
        <div className='h-4 bg-muted rounded-none w-1/4'></div>
        <div className='h-24 bg-muted rounded-none w-full'></div>
      </div>
    </div>
  );
}
