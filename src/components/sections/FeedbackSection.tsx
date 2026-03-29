import { useState } from "react";
import {
  Spinner,
  ProgressBar,
  Badge,
  Alert,
  Tooltip,
  Toast,
  ToastContainer
} from "../feedback";
import { Button } from "../buttons";

export function FeedbackSection() {
  const [showToast, setShowToast] = useState(false);

  return (
    <section className="section">
      <header className="section__header">
        <h2 className="section__title">Feedback & Indicateurs</h2>
        <p className="section__description">
          Spinners, barres de progression, badges et notifications
        </p>
      </header>

      <div className="section__content">
        {/* Spinners */}
        <div className="component-group">
          <h3 className="component-group__title">Spinners</h3>
          <div className="component-group__content">
            <Spinner size="sm" />
            <Spinner size="md" />
            <Spinner size="lg" />
          </div>
        </div>

        {/* Progress Bars */}
        <div className="component-group">
          <h3 className="component-group__title">Barres de progression</h3>
          <div className="component-group__content component-group__content--vertical">
            <ProgressBar value={25} label="Téléchargement" showLabel />
            <ProgressBar value={50} variant="success" showLabel />
            <ProgressBar value={75} variant="warning" showLabel animated />
            <ProgressBar value={90} variant="error" showLabel />
          </div>
        </div>

        {/* Badges */}
        <div className="component-group">
          <h3 className="component-group__title">Badges</h3>
          <div className="component-group__content">
            <Badge>Par défaut</Badge>
            <Badge variant="primary">Primaire</Badge>
            <Badge variant="success">Succès</Badge>
            <Badge variant="warning">Attention</Badge>
            <Badge variant="error">Erreur</Badge>
            <Badge variant="info">Info</Badge>
            <Badge variant="success" dot>
              Avec point
            </Badge>
          </div>
        </div>

        {/* Alerts */}
        <div className="component-group">
          <h3 className="component-group__title">Alertes</h3>
          <div className="component-group__content component-group__content--vertical">
            <Alert variant="info" title="Information">
              Votre session expire dans 5 minutes.
            </Alert>
            <Alert variant="success" title="Succès">
              Votre commande a été confirmée avec succès.
            </Alert>
            <Alert variant="warning" title="Attention">
              Certains champs ne sont pas remplis correctement.
            </Alert>
            <Alert variant="error" title="Erreur" onClose={() => {}}>
              Une erreur est survenue lors de l'enregistrement.
            </Alert>
          </div>
        </div>

        {/* Tooltips */}
        <div className="component-group">
          <h3 className="component-group__title">Tooltips</h3>
          <div className="component-group__content">
            <Tooltip content="Tooltip en haut" position="top">
              <Button variant="outline">Haut</Button>
            </Tooltip>
            <Tooltip content="Tooltip en bas" position="bottom">
              <Button variant="outline">Bas</Button>
            </Tooltip>
            <Tooltip content="Tooltip à gauche" position="left">
              <Button variant="outline">Gauche</Button>
            </Tooltip>
            <Tooltip content="Tooltip à droite" position="right">
              <Button variant="outline">Droite</Button>
            </Tooltip>
          </div>
        </div>

        {/* Toasts */}
        <div className="component-group">
          <h3 className="component-group__title">Toasts / Snackbars</h3>
          <div className="component-group__content component-group__content--vertical">
            <Button variant="primary" onClick={() => setShowToast(true)}>
              Afficher un toast
            </Button>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                marginTop: "16px"
              }}
            >
              <Toast variant="info" onClose={() => {}}>
                Information importante
              </Toast>
              <Toast variant="success" onClose={() => {}}>
                Action réalisée avec succès
              </Toast>
              <Toast variant="warning" onClose={() => {}}>
                Attention requise
              </Toast>
              <Toast variant="error" onClose={() => {}}>
                Une erreur est survenue
              </Toast>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Container for dynamic toasts */}
      {showToast && (
        <ToastContainer position="top-right">
          <Toast
            variant="success"
            onClose={() => setShowToast(false)}
            duration={3000}
          >
            Toast dynamique affiché !
          </Toast>
        </ToastContainer>
      )}
    </section>
  );
}
