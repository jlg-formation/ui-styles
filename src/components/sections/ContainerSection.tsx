import { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImage,
  Modal,
  Accordion,
  Tabs,
  DataTable
} from "../containers";
import { Button } from "../buttons";
import { Badge } from "../feedback";

export function ContainerSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const accordionItems = [
    {
      id: "1",
      title: "Comment créer un compte ?",
      content:
        'Pour créer un compte, cliquez sur le bouton "Inscription" en haut à droite de la page. Remplissez le formulaire avec vos informations personnelles et validez.'
    },
    {
      id: "2",
      title: "Comment réinitialiser mon mot de passe ?",
      content:
        'Cliquez sur "Mot de passe oublié" sur la page de connexion. Entrez votre adresse email et suivez les instructions envoyées par email.'
    },
    {
      id: "3",
      title: "Comment contacter le support ?",
      content:
        "Vous pouvez nous contacter via le formulaire de contact, par email à support@example.com ou par téléphone au 01 23 45 67 89."
    }
  ];

  const tabsData = [
    {
      id: "description",
      label: "Description",
      content: (
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      )
    },
    {
      id: "specifications",
      label: "Spécifications",
      content: (
        <div>
          <ul>
            <li>Dimension : 100 x 50 x 25 cm</li>
            <li>Poids : 2.5 kg</li>
            <li>Matériau : Aluminium</li>
          </ul>
        </div>
      )
    },
    {
      id: "reviews",
      label: "Avis",
      content: (
        <div>
          <p>⭐⭐⭐⭐⭐ - Excellent produit ! Je recommande vivement.</p>
        </div>
      )
    }
  ];

  const tableData = [
    {
      id: 1,
      nom: "Martin",
      prenom: "Jean",
      email: "jean.martin@email.com",
      role: "Admin"
    },
    {
      id: 2,
      nom: "Dupont",
      prenom: "Marie",
      email: "marie.dupont@email.com",
      role: "Éditeur"
    },
    {
      id: 3,
      nom: "Bernard",
      prenom: "Pierre",
      email: "pierre.bernard@email.com",
      role: "Utilisateur"
    },
    {
      id: 4,
      nom: "Petit",
      prenom: "Sophie",
      email: "sophie.petit@email.com",
      role: "Utilisateur"
    }
  ];

  const tableColumns = [
    { key: "nom" as const, header: "Nom" },
    { key: "prenom" as const, header: "Prénom" },
    { key: "email" as const, header: "Email" },
    {
      key: "role" as const,
      header: "Rôle",
      render: (value: unknown) => (
        <Badge
          variant={
            value === "Admin"
              ? "primary"
              : value === "Éditeur"
                ? "info"
                : "default"
          }
        >
          {value as string}
        </Badge>
      )
    }
  ];

  return (
    <section className="section">
      <header className="section__header">
        <h2 className="section__title">Conteneurs & Cartes</h2>
        <p className="section__description">
          Cards, modales, accordéons, onglets et tableaux
        </p>
      </header>

      <div className="section__content">
        {/* Cards */}
        <div className="component-group">
          <h3 className="component-group__title">Cartes</h3>
          <div className="component-group__content component-group__content--grid">
            <Card hoverable>
              <CardImage
                src="https://picsum.photos/400/200?random=1"
                alt="Image exemple"
              />
              <CardBody>
                <h4>Titre de la carte</h4>
                <p>Description courte de la carte avec du texte d'exemple.</p>
              </CardBody>
              <CardFooter>
                <Button variant="primary" size="sm">
                  Voir plus
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <h4>Carte avec header</h4>
              </CardHeader>
              <CardBody>
                <p>Contenu de la carte avec header et footer séparés.</p>
              </CardBody>
              <CardFooter>
                <Button variant="outline" size="sm">
                  Annuler
                </Button>
                <Button variant="primary" size="sm">
                  Confirmer
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Modal */}
        <div className="component-group">
          <h3 className="component-group__title">Modale</h3>
          <div className="component-group__content">
            <Button variant="primary" onClick={() => setIsModalOpen(true)}>
              Ouvrir la modale
            </Button>
          </div>
        </div>

        {/* Accordion */}
        <div className="component-group">
          <h3 className="component-group__title">Accordéon</h3>
          <div className="component-group__content component-group__content--vertical">
            <Accordion items={accordionItems} defaultOpen={["1"]} />
          </div>
        </div>

        {/* Tabs */}
        <div className="component-group">
          <h3 className="component-group__title">Onglets</h3>
          <div className="component-group__content component-group__content--vertical">
            <Tabs tabs={tabsData} />
          </div>
        </div>

        {/* Data Table */}
        <div className="component-group">
          <h3 className="component-group__title">Tableau de données</h3>
          <div className="component-group__content component-group__content--vertical">
            <DataTable columns={tableColumns} data={tableData} keyField="id" />
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Titre de la modale"
      >
        <p>
          Ceci est le contenu de la modale. Vous pouvez y mettre n'importe quel
          contenu.
        </p>
        <div
          style={{
            marginTop: "24px",
            display: "flex",
            gap: "12px",
            justifyContent: "flex-end"
          }}
        >
          <Button variant="outline" onClick={() => setIsModalOpen(false)}>
            Annuler
          </Button>
          <Button variant="primary" onClick={() => setIsModalOpen(false)}>
            Confirmer
          </Button>
        </div>
      </Modal>
    </section>
  );
}
