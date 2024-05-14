import { PageTitle } from "@/components/page-title";

export default function FavoritesPage() {
  return (
    <div className="flex w-full flex-col px-5 md:px-10 lg:px-20">
      <div className="w-full space-y-3 py-2">
        <PageTitle subtitle="Websites That Inspire and Assist My Web Development.">
          Favorites
        </PageTitle>
      </div>
    </div>
  );
}
