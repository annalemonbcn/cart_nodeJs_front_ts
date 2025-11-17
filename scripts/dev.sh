#!/usr/bin/env bash
set -e

# Localiza NVM (ajusta la ruta si lo tienes en otro sitio)
export NVM_DIR="$HOME/.nvm"
# Carga nvm
# (la segunda línea carga los bash_completion si existen; opcional)
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && . "$NVM_DIR/bash_completion"

# Usa la versión de .nvmrc (instala si no está)
nvm use --install

# Arranca tu dev server
vite
