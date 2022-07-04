/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("ms_request_status").del();
  await knex("ms_request_status").insert([
    { rs_id: 1, rs_kode: "01", rs_nama: "Requested", rs_status: true },
    { rs_id: 2, rs_kode: "02", rs_nama: "Confirm", rs_status: true },
    { rs_id: 3, rs_kode: "03", rs_nama: "Decline", rs_status: true },
    { rs_id: 4, rs_kode: "04", rs_nama: "Handover", rs_status: true },
    { rs_id: 5, rs_kode: "05", rs_nama: "Return", rs_status: true },
    { rs_id: 6, rs_kode: "06", rs_nama: "Reviewed", rs_status: true },
    { rs_id: 7, rs_kode: "07", rs_nama: "Cancel", rs_status: true },
  ]);
};
