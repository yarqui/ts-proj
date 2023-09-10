type Combinable = number | string;

type Overload = {
  (a: number, b: number): number;
  (a: string, b: string): string;
  (a: number, b: string): string;
  (a: string, b: number): string;
};

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number, b: string): string;
function add(a: string, b: number): string;

function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

add(1, 2);
