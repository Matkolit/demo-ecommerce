## 📁 Struktura

```
src/
├── components/          # Reusable UI components
│   ├── Button.tsx       # Base button component
│   ├── ProductCard.tsx  # Product display component
│   ├── Pagination.tsx   # Navigation component
│   └── ...
├── hooks/               # Custom React hooks
│   ├── useFetcher.ts    # Data fetching logic
│   ├── usePagination.ts # Pagination state management
│   └── useDebounce.ts   # Input debouncing
├── services/            # API layer
├── utils/               # Helper functions
├── constants/           # App constants
├── static/              # Static assets
└── types.ts             # TypeScript definitions
```

## ⚠️ WAŻNE:

- Skupiłem się na kluczowych konceptach React/TypeScript, więc niektóre aspekty, jak responsywność mobilna, zostały pominięte.
- Projekt nie zawiera zewnętrznych bibliotek do zarządzania stanem, aby skupić się na czystych hookach i prezentacji moich umiejętności.
- W niektórych miejscach użyłem komentarze, ale tylko dlatego, aby wyjaśnić moje podejście lub przedstwić jak mogłoby coś wyglądać w prawdziwym projekcie. W normalnych warunkach komentarze nie byłyby potrzebne w podanych przykładach.

## ✨ Instalacja i uruchomienie

```bash
# Klonowanie repozytorium
git clone https://github.com/Matkolit/demo-ecommerce.git
cd react-shop

# Dodanie pliku .env (w tym przypadku przekleić wartość z .env.local do .env ) 
cp .env.local .env

# Instalacja zależności
pnpm install

# Uruchomienie w trybie development
pnpm dev

# Build produkcyjny
pnpm build

# Preview buildu produkcyjnego
pnpm preview
```

## 🔧 Optymalizacje

- **Debounce zapytań** - Redukcja niepotrzebnych zapytań
- **Szkielety** - Lepsze UX podczas ładowania
- **Leniwe ładowanie** - Optymalizacja obrazów
- **Obsługa błędów** - Podstawowa obsługa błędów
- **Pobranie Czcionek lokalnie**

## 🚀 Kluczowe Funkcjonalności

- **Dostępność (WCAG 2.1)** - Wsparcie dla czytników ekranu, nawigacja klawiaturą
- **Wyszukiwanie z debounce** - Płynne wyszukiwanie bez spamu zapytań
- **TypeScript** - Pełne bezpieczeństwo typów
- **Custom hooks** - Separacja logiki biznesowej od UI
- **Obsługa błędów** - Graceful error handling z możliwością

### Dodatkowo:

- **Paginacja** - Prosta aczkolwiek działająca paginacja
- **Sticky header** - Utrzymanie nagłówka widocznego podczas przewijania (lepszy UX)

## 🛠 Stack Technologiczny

- **React 19** + **TypeScript**
- **Rspack** - Szybsza alternatywa dla Vite
- **TailwindCSS** + **Lucide React**
- **ESLint** - Konfiguracja z stricte TypeScript
- **Prettier** - Formatowanie kodu

## 🎯 Kilka Kluczowych Wzorców użytych

### 1. Custom Hooks dla logiki biznesowej

```typescript
const { data, status, error } = useFetcher<RootProducts>({
  queryFn: fetchProducts,
  enable: true,
  deps: [query, pagination.skip],
  omitDebounceWhen: (deps) => deps[0] === "",
});
```

### 2. TypeScript First (DX experience)

```typescript
interface ProductsSectionProps {
  products?: Product[];
  heading: ComponentProps<typeof Heading>;
  status: FetcherStatus;
}
```

### 3. Accessibility First ( Wsparcie dla osób z ograniczeniami)

```tsx
<div role="status" aria-live="polite" className="contents">
  <ProductsLoader />
  <span className="sr-only">Ładowanie produktów</span>
</div>
```

### 4. Zarządzanie Stanem bez Zewnętrznych Bibliotek

```typescript
export const usePagination = ({ limit, initialSkip } = {}) => {
  const [skip, setSkip] = useState(initialSkip);
  const [total, setTotal] = useState<number | null>(null);
  // ... logika paginacji
  return { skip, page, onNext, onPrev, hasNext, hasPrev };
};
```

- **DRY**
- **Zasady SOLID**
- **Praktyki Clean Code**
- **Kompozycja komponentów**
- ...
