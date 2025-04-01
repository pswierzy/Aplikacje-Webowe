# 📘 Wprowadzenie do Aplikacji Internetowych - Laboratorium 03

## 🎯 Opis ćwiczeń

### Ćwiczenie 1: Stoper

- **Plik:** `Zadanka/stoper.html`, `Zadanka/stoper.js`
- **Funkcjonalności:**
  - Przyciski "start", "stop", "reset" kontrolujące stoper.
  - Wyświetlanie czasu w formacie `Xmin Xs` (np. `3min 48s`).
  - Dla czasu poniżej minuty: format `51s`.

### Ćwiczenie 2: Generator haseł

- **Plik:** `Zadanka/hasla.html`, `Zadanka/hasla.js`
- **Funkcjonalności:**
  - Kontrolki: minimalna/maksymalna długość hasła, checkboxy dla wielkich liter i znaków specjalnych.
  - Generowanie hasła po kliknięciu przycisku i wyświetlenie go w `alert()`.

### Ćwiczenie 3: Pobieranie i filtrowanie danych z API

- **Plik:** `Zadanka/dane_z_api.html`, `Zadanka/api.js`
- **Funkcjonalności:**
  - Pobranie danych z [dummyjson.com/products](https://dummyjson.com/products) i wyświetlenie pierwszych 30 produktów w tabeli (kolumny: zdjęcie, tytuł, opis).
  - Input do filtrowania danych po frazie.
  - Select do sortowania danych (rosnąco, malejąco, oryginalna kolejność).

---

## Zadanie domowe: Gra Zombie

- **Plik:** `GraZombie/game.js`, `GraZombie/index.html`, `GraZombie/style.css`
- **Wymagania:**
  - **Mechanika gry:**
    - Gracz zaczyna z 3 życiami (wyświetlane jako serca w lewym górnym rogu).
    - Strzelanie myszą (lewy przycisk) – trafienie w zombie dodaje 20 punktów, brak trafienia odejmuje 5 punktów.
    - Zombie poruszają się z prawej do lewej strony (losowa prędkość i skala).
    - Gdy zombie dotrze do lewej krawędzi, gracz traci życie.
    - Koniec gry przy 0 żyć: wyświetlenie pop-upu z opcją restartu i odtwarzanie smutnej muzyki w tle.
  - **Elementy wizualne:**
    - Tło pokrywające całą planszę.
    - Celownik jako niestandardowy obrazek.
    - Animacja chodu zombie.

---

## Struktura projektu

```
Lab_03/
├── GraZombie/              # Folder z grą Zombie
│ ├── images/               # Obrazy (tło, celownik, zombie itp.)
│ ├── game.js               # Logika gry
│ ├── index.html            # Główny plik HTML gry
│ └── style.css             # Style CSS gry
└── Zadanka/                # Rozwiązania ćwiczeń
│ ├── api.js                # Kod do ćwiczenia 3 (API)
│ ├── dane_z_api.html       # Podstrona ćwiczenia 3
│ ├── hasla.html            # Podstrona generatora haseł
│ ├── hasla.js              # Logika generatora haseł
│ ├── stoper.html           # Podstrona stopera
│ └── stoper.js             # Logika stopera
```

## 🛠 Konfiguracja

1. **Sklonuj repozytorium**
   ```bash
   git clone https://github.com/pswierzy/Aplikacje-Webowe.git
   cd Aplikacje-Webowe/Lab_03/GraZombie
   ```
2. **Uruchom plik index.html**
