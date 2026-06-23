export default function LoadingBookList() {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-background text-foreground p-6 md:p-12 max-w-7xl mx-auto animate-pulse">
      <header className="mb-12">
        <div className="h-4 bg-muted border border-border rounded-none w-20 mb-4"></div>
        <div className="h-14 bg-muted border border-border rounded-none w-1/2 mb-4"></div>
        <div className="h-6 bg-muted rounded-none w-2/3"></div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="border border-border bg-card p-6 h-52 flex flex-col justify-between">
            <div>
              <div className="h-3 bg-muted rounded-none w-1/4 mb-3"></div>
              <div className="h-6 bg-muted rounded-none w-3/4 mb-2"></div>
              <div className="h-4 bg-muted rounded-none w-1/2"></div>
            </div>
            <div className="border-t border-border pt-4 flex justify-between">
              <div className="h-3 bg-muted rounded-none w-1/4"></div>
              <div className="h-3 bg-muted rounded-none w-1/6"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
