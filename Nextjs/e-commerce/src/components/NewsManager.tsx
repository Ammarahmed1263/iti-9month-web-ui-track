// 📁 components/NewsManager.tsx
import useSWR from "swr";
import { toast } from "sonner";
import { useEffect } from "react";

interface News {
  id: number;
  quote: string;
  author: string;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function NewsManager({
  initialNews,
}: {
  initialNews: News | null;
}) {
  const { data: news } = useSWR(
    "https://dummyjson.com/quotes/random",
    fetcher,
    {
      fallbackData: initialNews,
      refreshInterval: 1000 * 30,
      dedupingInterval: 1000 * 30,
    },
  );

  useEffect(() => {
    if (news && news.quote) {
      toast(news.author, {
        description: `"${news.quote}"`,
        id: String(news.id),
        duration: 8000,
        position: "bottom-right",
        closeButton: false,
        classNames: {
          toast: "!bg-card !border-primary",
          title: "!text-primary !font-bold",
          description: "!text-foreground/80 !italic",
        },
      });
    }
  }, [news]);

  return null;
}
