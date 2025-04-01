# 📘 Wprowadzenie do Aplikacji Internetowych - Laboratorium 04

## React: Komponenty, Stan i Efekty

---

## 🎯 Opis ćwiczeń

### 📋 Zadanie 1: Koszyk z produktami

- **1.1:** Utwórz komponenty `Koszyk` i `Produkt`. `Koszyk` wyświetla 5 produktów z różnymi nazwami.
- **1.2:** Zmodyfikuj `Koszyk`, aby produkty generowano z tablicy przy użyciu `map()`.

### 📋 Zadanie 2: Liczniki

- **2.1:** Komponent `Licznik` z przyciskiem zwiększającym stan.
- **2.2:** Rozdziel logikę na `Przycisk` (przekazanie funkcji przez props).

### 📋 Zadanie 3: Formularze

- **3.1:** Komponent `Formularz` z synchronizacją tekstu między inputem a divem.
- **3.2:** Komponent `Hasło` z walidacją zgodności haseł.
- **3.3:** Rozszerzenie `Hasło` o pole _Nazwa użytkownika_ i warunkowe aktywowanie przycisku.

### 📋 Zadanie 4: Operacje na stanie

- **4.1:** Komponent `Ternary` z renderowaniem warunkowym (ternary operator).
- **4.2:** Komponent `Aktualizacja` zmieniający cenę produktu z użyciem `spread operator`.

### 📋 Zadanie 5: Lista studentów

- **5.1:** Tabela studentów z interfejsem TypeScript.
- **5.2:** Dodawanie studentów przez formularz z walidacją (rocznik jako liczba).

### 📋 Zadanie 6: Efekty (useEffect)

- **6.1:** Modyfikacja `Licznik` z logowaniem zmian do konsoli.
- **6.2:** Komponent `Tytuł` synchronizujący input z tytułem strony.
- **6.3:** Komponent `Odliczanie` z interwałem i kontrolą przycisku.

### 📋 Zadanie 7: Komentarze z API

- **7.1:** Komponent `Komentarz` z możliwością lajkowania.
- **7.2:** Pobieranie komentarzy z [dummyjson.com/comments](https://dummyjson.com/comments) i wyświetlanie ich.

### 📋 Zadanie 8: Local Storage i Routing

- **8.1:** Licznik z zapisem stanu w `localStorage`.
- **8.2:** Aplikacja bloga z React Router:
  - Lista artykułów (`/blog`).
  - Strona artykułu (`/article/:id`).
  - Formularz dodawania (`/dodaj`).
  - Dane przechowywane w `localStorage`.

---

## 🛠 Wymagania techniczne

- **TypeScript:** Interfejsy dla studentów i komentarzy.
- **React Hooks:** `useState`, `useEffect`, `useContext`.
- **React Router:** Nawigacja między podstronami (Zadanie 8.2).
- **Walidacja:** Sprawdzanie pustych pól i typów danych.

---

## 🔗 Przydatne linki

- [React Dokumentacja](https://react.dev/)
- [TypeScript Tutorial](https://www.w3schools.com/typescript/)
- [React Router](https://reactrouter.com/)
