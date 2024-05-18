const PRICE_MOCK = [0];
for (let i = 30_000; i < 80_000; i += 5_000) {
  PRICE_MOCK.push(i);
}
for (let i = 80_000; i < 250_000; i += 10_000) {
  PRICE_MOCK.push(i);
}
for (let i = 250_000; i < 750_000; i += 50_000) {
  PRICE_MOCK.push(i);
}

for (let i = 800_000; i < 2_500_000; i += 100_000) {
  PRICE_MOCK.push(i);
}

for (let i = 2_500_000; i < 5_500_000; i += 250_000) {
  PRICE_MOCK.push(i);
}

for (let i = 5_500_000; i < 16_500_000; i += 500_000) {
  PRICE_MOCK.push(i);
}

PRICE_MOCK.push(30000000, 40000000, 50000000);

const MILEAGE_MOCK = [0];
for (let i = 1_000; i < 15_000; i += 1_000) {
  MILEAGE_MOCK.push(i);
}

for (let i = 15000; i < 75000; i += 5000) {
  MILEAGE_MOCK.push(i);
}

for (let i = 80000; i < 150000; i += 10000) {
  MILEAGE_MOCK.push(i);
}

MILEAGE_MOCK.push(150000, 200000, 250000, 300000);

const ENGINE_VOLUME_MOCK: number[] = [];
for (let i = 10; i < 60; i += 1) {
  ENGINE_VOLUME_MOCK.push(i / 10);
}

const ENGINE_POWER_MOCK: number[] = [];
for (let i = 100; i < 1600; i += 25) {
  ENGINE_POWER_MOCK.push(i);
}

const MANUFACTURE_YEAR_MOCK: number[] = [];
for (let i = new Date().getFullYear(); i > 1980; i--) {
  MANUFACTURE_YEAR_MOCK.push(i);
}

export { PRICE_MOCK, MILEAGE_MOCK, ENGINE_POWER_MOCK, ENGINE_VOLUME_MOCK, MANUFACTURE_YEAR_MOCK };
