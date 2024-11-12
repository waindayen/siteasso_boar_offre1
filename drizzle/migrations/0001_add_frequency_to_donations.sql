-- Ajout de la colonne frequency à la table donations
ALTER TABLE donations ADD COLUMN frequency text NOT NULL DEFAULT 'once';