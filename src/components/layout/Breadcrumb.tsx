import { ChevronRightIcon, HomeIcon } from "@heroicons/react/24/outline";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="breadcrumb" aria-label="Fil d'Ariane">
      <ol className="breadcrumb__list">
        <li className="breadcrumb__item">
          <a href="#" className="breadcrumb__link">
            <HomeIcon width={16} height={16} />
            <span className="visually-hidden">Accueil</span>
          </a>
        </li>
        {items.map((item, index) => (
          <li key={index} className="breadcrumb__item">
            <ChevronRightIcon
              width={16}
              height={16}
              className="breadcrumb__separator"
            />
            {item.href ? (
              <a href={item.href} className="breadcrumb__link">
                {item.label}
              </a>
            ) : (
              <span className="breadcrumb__current" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
