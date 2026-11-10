# ICT with Sanka — Simple Student Manager

A small browser-based student register with:
- Add students and create a unique Student ID
- Generate printable QR codes for each student
- Scan QR codes using a phone/computer camera to record daily attendance
- Prevent duplicate attendance on the same day
- Enter exam marks and calculate percentages
- Export/restore JSON backups and export attendance/marks CSV files

## Run
Open `index.html` in a modern browser, or host this folder using GitHub Pages. Camera scanning requires HTTPS (GitHub Pages provides HTTPS) and camera permission.

## Important data note
This lightweight version stores records in the browser's localStorage. Data stays on that browser/device and is not shared or synchronized across devices. Export JSON backups regularly. Do not treat this as a secure multi-user production database.
