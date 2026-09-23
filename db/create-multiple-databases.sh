#!/bin/bash

set -euo pipefail

# Fallback default for POSTGRES_USER if not set
POSTGRES_USER="${POSTGRES_USER:-postgres}"

create_user_and_database() {
  local db="$1"
  echo "Creating user and database '$db'..."
  
  psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    DO \$\$
    BEGIN
      IF NOT EXISTS (SELECT FROM pg_catalog.pg_roles WHERE rolname = '$db') THEN
        CREATE ROLE "$db" WITH LOGIN PASSWORD 'password';
      END IF;
    END
    \$\$;

    SELECT 'CREATE DATABASE "$db"' 
    WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = '$db')\gexec

    GRANT ALL PRIVILEGES ON DATABASE "$db" TO "$db";
EOSQL
}

if [ -n "${POSTGRES_MULTIPLE_DATABASES:-}" ]; then
  echo "Multiple database creation requested: $POSTGRES_MULTIPLE_DATABASES"
  
  # Safe array splitting on commas without spawning extra subshells (tr)
  IFS=',' read -ra DATABASES <<< "$POSTGRES_MULTIPLE_DATABASES"
  for db in "${DATABASES[@]}"; do
    # Trim leading/trailing whitespace
    db=$(echo "$db" | xargs)
    [ -n "$db" ] && create_user_and_database "$db"
  done
  
  echo "Multiple databases created successfully."
fi