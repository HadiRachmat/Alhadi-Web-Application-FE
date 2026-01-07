import type { Pesantren } from '@/types/pesantren';

interface Props {
  item: Pesantren;
}

export default function PesantrenCard({ item }: Props) {
  return (
    <article className="group rounded-xl border border-black/5 dark:border-white/10 bg-white/80 dark:bg-neutral-900/80 p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h4 className="font-semibold leading-snug group-hover:text-emerald-600">{item.name}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-300">{item.address}</p>
        </div>
        <span className="inline-flex items-center rounded-md bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-300 ring-1 ring-emerald-600/20">
          {item.province}
        </span>
      </div>
      {item.description ? (
        <p className="mt-3 text-sm line-clamp-2 text-gray-600 dark:text-gray-300">
          {item.description}
        </p>
      ) : null}
    </article>
  );
}
