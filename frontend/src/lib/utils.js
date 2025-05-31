// formats a Date object to "MMM dd, yyyy" format (e.g., "May 31, 2025")
export function formatDate(date) {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
