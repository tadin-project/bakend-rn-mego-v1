/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("ms_city").del();
  await knex("ms_city").insert([
    {
      city_id: 1,
      city_kode: "01",
      city_nama: "Kab. Tulungagung",
      city_status: true,
    },
    {
      city_id: 2,
      city_kode: "02",
      city_nama: "Kota Kediri",
      city_status: true,
    },
    {
      city_id: 3,
      city_kode: "03",
      city_nama: "Kota Blitar",
      city_status: true,
    },
  ]);
};
