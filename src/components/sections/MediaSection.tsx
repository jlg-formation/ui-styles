import { useState } from "react";
import { Avatar, AvatarGroup, Thumbnail, Tag, Pagination } from "../media";
import { StarIcon } from "@heroicons/react/24/solid";

export function MediaSection() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <section className="section">
      <header className="section__header">
        <h2 className="section__title">Médias & Avatars</h2>
        <p className="section__description">
          Avatars, miniatures, tags et pagination
        </p>
      </header>

      <div className="section__content">
        {/* Avatars */}
        <div className="component-group">
          <h3 className="component-group__title">Avatars</h3>
          <div className="component-group__content">
            <Avatar size="xs" name="Jean Martin" />
            <Avatar size="sm" name="Marie Dupont" />
            <Avatar
              size="md"
              src="https://i.pravatar.cc/150?img=1"
              alt="User"
            />
            <Avatar
              size="lg"
              src="https://i.pravatar.cc/150?img=2"
              alt="User"
              status="online"
            />
            <Avatar
              size="xl"
              src="https://i.pravatar.cc/150?img=3"
              alt="User"
              status="busy"
            />
          </div>
        </div>

        {/* Avatar Group */}
        <div className="component-group">
          <h3 className="component-group__title">Groupe d'avatars</h3>
          <div className="component-group__content">
            <AvatarGroup max={4}>
              <Avatar src="https://i.pravatar.cc/150?img=1" alt="User 1" />
              <Avatar src="https://i.pravatar.cc/150?img=2" alt="User 2" />
              <Avatar src="https://i.pravatar.cc/150?img=3" alt="User 3" />
              <Avatar src="https://i.pravatar.cc/150?img=4" alt="User 4" />
              <Avatar src="https://i.pravatar.cc/150?img=5" alt="User 5" />
              <Avatar src="https://i.pravatar.cc/150?img=6" alt="User 6" />
            </AvatarGroup>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="component-group">
          <h3 className="component-group__title">Miniatures</h3>
          <div className="component-group__content">
            <Thumbnail
              src="https://picsum.photos/200/200?random=1"
              alt="Image 1"
              size="sm"
            />
            <Thumbnail
              src="https://picsum.photos/200/200?random=2"
              alt="Image 2"
              size="md"
              rounded
            />
            <Thumbnail
              src="https://picsum.photos/200/200?random=3"
              alt="Image 3"
              size="lg"
              onClick={() => alert("Miniature cliquée !")}
            />
          </div>
        </div>

        {/* Tags */}
        <div className="component-group">
          <h3 className="component-group__title">Tags / Chips</h3>
          <div className="component-group__content">
            <Tag>Par défaut</Tag>
            <Tag variant="primary">Primaire</Tag>
            <Tag variant="success">Succès</Tag>
            <Tag variant="warning">Attention</Tag>
            <Tag variant="error">Erreur</Tag>
            <Tag variant="info">Info</Tag>
            <Tag variant="primary" icon={<StarIcon width={14} height={14} />}>
              Favori
            </Tag>
            <Tag variant="success" removable onRemove={() => {}}>
              Supprimable
            </Tag>
          </div>
        </div>

        {/* Pagination */}
        <div className="component-group">
          <h3 className="component-group__title">Pagination</h3>
          <div className="component-group__content component-group__content--vertical">
            <Pagination
              currentPage={currentPage}
              totalPages={10}
              onPageChange={setCurrentPage}
            />
            <p
              style={{
                fontSize: "14px",
                color: "var(--text-secondary)",
                marginTop: "8px"
              }}
            >
              Page actuelle : {currentPage}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
