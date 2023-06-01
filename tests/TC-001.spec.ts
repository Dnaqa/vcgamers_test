import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  test.setTimeout(60000);
  await page.goto('https://www.vcgamers.com/');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Belanja Sekarang' }).first().click();
  const page1 = await page1Promise;
  await page1.goto('https://app.vcgamers.com/');
  //test.setTimeout(60000);
  await page1.getByRole('link', { name: 'Masuk / Daftar' }).click();
  await page1.getByPlaceholder('Email', { exact: true }).click();
  await page1.getByPlaceholder('Email', { exact: true }).fill('flufflufpan@gmail.com');
  await page1.getByPlaceholder('Password', { exact: true }).click();
  await page1.getByPlaceholder('Password', { exact: true }).fill('Jarum76&^');
  await page1.getByRole('button', { name: 'Masuk' }).click();
  await page1.goto('https://app.vcgamers.com/');
  
  //await page.goto('https://example.com', { timeout: 5000 }); // Timeout set to 5 seconds

  //await page1.getByRole('img', { name: 'icon-search' }).click();
  await page1.getByPlaceholder('placholder').click();
  await page1.getByPlaceholder('placholder').fill('steam');
  await page1.getByRole('img', { name: 'icon-search' }).click();
  await page1.getByRole('banner').getByText('Steam', { exact: true }).click();
  await page1.getByRole('link', { name: 'Foto Voucher Steam dari Torkshop 68003 IDR 8.000 Steam Wallet IDR Steam Torkshop Rp 8.800 11% Rp 7.777,- 5.0 Terjual 87 time ± 0 menit' }).click();
  await page1.getByRole('button', { name: 'Beli Langsung' }).click();
  await page1.getByRole('paragraph').filter({ hasText: 'Pilih Metode Pembayaran' }).click();
  await page1.getByText('QRIS').click();
  await page1.getByRole('button', { name: 'Bayar' }).click();
  await page1.getByRole('button', { name: 'Lanjutkan' }).click();
  await page1.getByRole('button', { name: 'Cek Transaksi' }).click();
});