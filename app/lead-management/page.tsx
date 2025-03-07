"use client";

import { useEffect, useState } from "react";
import Sidebar from "../_components/Sidebar";
import { Lead, Pagination } from "../api/leads/types";
import styles from "./page.module.css";
import { MdChevronLeft, MdChevronRight, MdArrowDownward } from "react-icons/md";

export default function Assessment() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [page, setPage] = useState<number>(1);
  // const [limit, setLimit] = useState<number>(8);
  const [pagination, setPagination] = useState<Pagination | null>(null);

  useEffect(() => {
    async function fetchLeads() {
      const response = await fetch(
        `http://localhost:3000/api/leads?page=${page}&limit=${8}`
      );
      const rawData = await response.json();
      setLeads(rawData.data);
      setPagination(rawData.pagination);
    }
    fetchLeads();
  }, [page]);

  function buildPager() {
    const arr = [];
    if (pagination) {
      for (let i = 1; i <= pagination.totalPages; i += 1) {
        arr.push(i);
      }
    }
    return arr.map((i, index) => (
      <a key={index} onClick={() => setPage(i)}>{i}</a>
    ));
  }

  return (
    <div className={styles.page}>
      <Sidebar
        links={[
          <a key="leads" href="/lead-management">
            <b>Leads</b>
          </a>,
          <a key="settings" href="/settings">
            Settings
          </a>,
        ]}
      />
      <main className={styles.main}>
        <h1>Leads</h1>

        {/* Search */}
        <div className={styles.filters}>
          <input type="search" placeholder="Search" />
          <select>
            <option>Status</option>
            <option>Pending</option>
            <option>Reached Out</option>
          </select>
        </div>

        {/* Table */}
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>Name <MdArrowDownward /></th>
              <th className={styles.th}>Submitted <MdArrowDownward /></th>
              <th className={styles.th}>Status <MdArrowDownward /></th>
              <th className={styles.th}>Country <MdArrowDownward /></th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead: Lead) => (
              <tr key={lead.id}>
                <td className={styles.td}>
                  {lead.firstName} {lead.lastName}
                </td>
                <td className={styles.td}>{lead.created}</td>
                <td className={styles.td}>{lead.status}</td>
                <td className={styles.td}>{lead.country}</td>
              </tr>
            ))}
          </tbody>
          <tfoot className={styles.tfoot}>
            <tr>
              <td className={styles.td} colSpan={4}>
                <a onClick={() => setPage(page - 1)}><MdChevronLeft /></a>
                {buildPager()}
                <a onClick={() => setPage(page + 1)}><MdChevronRight /></a>
              </td>
            </tr>
          </tfoot>
        </table>
      </main>
    </div>
  );
}
