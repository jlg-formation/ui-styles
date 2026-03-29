import {
  TextInput,
  SearchInput,
  Textarea,
  Select,
  Checkbox,
  RadioButton,
  Toggle,
  DatePicker,
  RangeSlider
} from "../forms";

export function FormSection() {
  return (
    <section className="section">
      <header className="section__header">
        <h2 className="section__title">Formulaires & Inputs</h2>
        <p className="section__description">
          Champs de saisie, sélecteurs et contrôles de formulaire
        </p>
      </header>

      <div className="section__content">
        {/* Text Inputs */}
        <div className="component-group">
          <h3 className="component-group__title">Champs de texte</h3>
          <div className="component-group__content component-group__content--grid">
            <TextInput label="Nom complet" placeholder="Jean Dupont" />
            <TextInput
              label="Email"
              placeholder="jean@example.com"
              type="email"
            />
            <TextInput
              label="Avec erreur"
              placeholder="Texte invalide"
              error="Ce champ est requis"
            />
            <TextInput
              label="Désactivé"
              placeholder="Non modifiable"
              disabled
            />
          </div>
        </div>

        {/* Search Input */}
        <div className="component-group">
          <h3 className="component-group__title">Recherche</h3>
          <div className="component-group__content">
            <SearchInput
              label="Rechercher"
              placeholder="Rechercher un produit..."
            />
          </div>
        </div>

        {/* Textarea */}
        <div className="component-group">
          <h3 className="component-group__title">Zone de texte</h3>
          <div className="component-group__content component-group__content--vertical">
            <Textarea
              label="Message"
              placeholder="Écrivez votre message ici..."
              rows={4}
              hint="Maximum 500 caractères"
            />
          </div>
        </div>

        {/* Select */}
        <div className="component-group">
          <h3 className="component-group__title">Sélection</h3>
          <div className="component-group__content component-group__content--grid">
            <Select
              label="Pays"
              placeholder="Sélectionnez un pays"
              options={[
                { value: "fr", label: "France" },
                { value: "be", label: "Belgique" },
                { value: "ch", label: "Suisse" },
                { value: "ca", label: "Canada" }
              ]}
            />
            <Select
              label="Catégorie"
              options={[
                { value: "tech", label: "Technologie" },
                { value: "design", label: "Design" },
                { value: "marketing", label: "Marketing" }
              ]}
              defaultValue="design"
            />
          </div>
        </div>

        {/* Checkboxes */}
        <div className="component-group">
          <h3 className="component-group__title">Cases à cocher</h3>
          <div className="component-group__content component-group__content--vertical">
            <Checkbox label="J'accepte les conditions générales" />
            <Checkbox
              label="Recevoir la newsletter"
              description="Recevez nos offres et actualités"
              defaultChecked
            />
            <Checkbox label="Option désactivée" disabled />
          </div>
        </div>

        {/* Radio Buttons */}
        <div className="component-group">
          <h3 className="component-group__title">Boutons radio</h3>
          <div className="component-group__content component-group__content--vertical">
            <RadioButton
              name="plan"
              label="Gratuit"
              description="Accès limité"
              defaultChecked
            />
            <RadioButton
              name="plan"
              label="Pro"
              description="Toutes les fonctionnalités"
            />
            <RadioButton
              name="plan"
              label="Enterprise"
              description="Support dédié"
            />
          </div>
        </div>

        {/* Toggle */}
        <div className="component-group">
          <h3 className="component-group__title">Interrupteurs</h3>
          <div className="component-group__content component-group__content--vertical">
            <Toggle
              label="Notifications"
              description="Recevoir les notifications push"
            />
            <Toggle label="Mode sombre" defaultChecked />
            <Toggle label="Désactivé" disabled />
          </div>
        </div>

        {/* Date Picker */}
        <div className="component-group">
          <h3 className="component-group__title">Sélecteur de date</h3>
          <div className="component-group__content">
            <DatePicker label="Date de naissance" />
            <DatePicker
              label="Date de livraison"
              hint="Sélectionnez une date de livraison"
            />
          </div>
        </div>

        {/* Range Slider */}
        <div className="component-group">
          <h3 className="component-group__title">Curseur</h3>
          <div className="component-group__content component-group__content--vertical">
            <RangeSlider label="Volume" defaultValue={50} />
            <RangeSlider
              label="Prix maximum"
              min={0}
              max={1000}
              defaultValue={250}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
