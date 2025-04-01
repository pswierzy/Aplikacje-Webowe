# 📘 Wprowadzenie do Aplikacji Internetowych - Laboratorium 04

## 🎯 Opis ćwiczeń

Stworzenie trzech serwisów REST API dla systemu księgarni z wykorzystaniem **Node.js Express**, **SQLite** oraz **JWT**. Projekt obejmuje:

- Obsługę książek,
- Zarządzanie zamówieniami,
- Autentykację użytkowników.

---

## 🛠 Wymagania funkcjonalne

### Serwis 1: Obsługa książek

**Endpointy:**

- `GET /api/books` – pobierz wszystkie książki.
- `GET /api/books/:id` – pobierz książkę o podanym ID.
- `POST /api/books` – dodaj nową książkę (wymagane pola: `nazwa`, `autor`, `rok`).
- `DELETE /api/books/:id` – usuń książkę o podanym ID.

### Serwis 2: Obsługa zamówień

**Endpointy:**

- `GET /api/orders/:userId` – pobierz zamówienia użytkownika.
- `POST /api/orders` – dodaj zamówienie (wymagane pola: `ID_KSJAZKI`, `ilość`).
  - Sprawdź, czy książka istnieje.
- `DELETE /api/orders/:orderId` – usuń zamówienie.
- `PATCH /api/orders/:orderId` – zaktualizuj zamówienie.

### Serwis 3: Obsługa użytkowników

**Endpointy:**

- `POST /api/register` – rejestracja (wymagane pola: `email`, `hasło`).
- `POST /api/login` – logowanie (zwraca JWT token).
- **Wymaganie:** Endpointy modyfikujące dane (POST, DELETE, PATCH) muszą być zabezpieczone JWT.

### Dodatkowe wymagania

- Użycie ORM (np. Sequelize) do komunikacji z bazą danych.
- Utworzenie kolekcji w Postman/Rest Client z wszystkimi endpointami.
- Responsywna obsługa błędów (np. brak książki przy zamówieniu).

---

## 🗂 Struktura projektu

```
Lab_04/
├── middleware/                             # Middleware (np. JWT auth)
├── models/                                 # Modele Sequelize (Book, Order, User)
├── routes/                                 # Definicje endpointów
│ ├── books.js                              # Endpointy dla książek
│ ├── orders.js                             # Endpointy dla zamówień
│ └── users.js                              # Endpointy dla użytkowników
├── node_modules/                           # Zależności
├── app.js                                  # Główny plik serwera
├── package.json                            # Konfiguracja projektu
├── database.db                             # Baza danych SQLite
└── Biblioteka.postman_collection.json      # Kolekcja Postman
```

## 🛠 Konfiguracja

1. **Sklonuj repozytorium**
   ```bash
   git clone https://github.com/pswierzy/Aplikacje-Webowe.git
   cd Aplikacje-Webowe/Lab_04
   ```
2. **Uruchom serwer**

```bash
npm install
npm start
```

3. **Testowanie endpointów**
   Zaimportuj kolekcję `Biblioteka.postman_collection.json` do Postmana
