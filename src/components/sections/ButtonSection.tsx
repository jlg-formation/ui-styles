import { Button, IconButton, ButtonGroup, FAB } from "../buttons";
import {
  PlusIcon,
  HeartIcon,
  ShareIcon,
  TrashIcon,
  ArrowDownTrayIcon,
  PencilIcon,
  ArrowRightIcon
} from "@heroicons/react/24/outline";

export function ButtonSection() {
  return (
    <section className="section">
      <header className="section__header">
        <h2 className="section__title">Boutons & Actions</h2>
        <p className="section__description">
          Boutons, actions et contrôles interactifs
        </p>
      </header>

      <div className="section__content">
        {/* Primary Buttons */}
        <div className="component-group">
          <h3 className="component-group__title">Boutons primaires</h3>
          <div className="component-group__content">
            <Button variant="primary" size="sm">
              Petit
            </Button>
            <Button variant="primary" size="md">
              Moyen
            </Button>
            <Button variant="primary" size="lg">
              Grand
            </Button>
            <Button variant="primary" disabled>
              Désactivé
            </Button>
            <Button variant="primary" isLoading>
              Chargement
            </Button>
          </div>
        </div>

        {/* Secondary Buttons */}
        <div className="component-group">
          <h3 className="component-group__title">Boutons secondaires</h3>
          <div className="component-group__content">
            <Button variant="secondary">Secondaire</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="danger">Danger</Button>
          </div>
        </div>

        {/* Buttons with Icons */}
        <div className="component-group">
          <h3 className="component-group__title">Boutons avec icônes</h3>
          <div className="component-group__content">
            <Button
              variant="primary"
              leftIcon={<PlusIcon width={20} height={20} />}
            >
              Ajouter
            </Button>
            <Button
              variant="secondary"
              leftIcon={<ArrowDownTrayIcon width={20} height={20} />}
            >
              Télécharger
            </Button>
            <Button
              variant="outline"
              rightIcon={<ArrowRightIcon width={20} height={20} />}
            >
              Continuer
            </Button>
          </div>
        </div>

        {/* Icon Buttons */}
        <div className="component-group">
          <h3 className="component-group__title">Boutons icône</h3>
          <div className="component-group__content">
            <IconButton
              icon={<HeartIcon width={20} height={20} />}
              aria-label="Ajouter aux favoris"
              variant="ghost"
            />
            <IconButton
              icon={<ShareIcon width={20} height={20} />}
              aria-label="Partager"
              variant="outline"
            />
            <IconButton
              icon={<PencilIcon width={20} height={20} />}
              aria-label="Modifier"
              variant="primary"
            />
            <IconButton
              icon={<TrashIcon width={20} height={20} />}
              aria-label="Supprimer"
              variant="ghost"
            />
          </div>
        </div>

        {/* Button Group */}
        <div className="component-group">
          <h3 className="component-group__title">Groupe de boutons</h3>
          <div className="component-group__content">
            <ButtonGroup>
              <Button variant="outline">Gauche</Button>
              <Button variant="outline">Centre</Button>
              <Button variant="outline">Droite</Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button variant="primary">Jour</Button>
              <Button variant="outline">Semaine</Button>
              <Button variant="outline">Mois</Button>
            </ButtonGroup>
          </div>
        </div>

        {/* FAB */}
        <div className="component-group">
          <h3 className="component-group__title">Floating Action Button</h3>
          <div className="component-group__content">
            <div
              style={{
                position: "relative",
                height: "100px",
                width: "100%",
                background: "var(--bg-tertiary)",
                borderRadius: "var(--border-radius-md)"
              }}
            >
              <FAB
                icon={<PlusIcon width={24} height={24} />}
                aria-label="Ajouter un élément"
                size="md"
                style={{ position: "absolute", bottom: "16px", right: "16px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
