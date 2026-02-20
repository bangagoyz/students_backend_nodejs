const axios = require("axios");

class StudentService {
  async fetchRawData() {
    const response = await axios.get(
      "https://ogienurdiana.com/career/ecc694ce4e7f6e45a5a7912cde9fe131",
    );

    if (response.data.RC !== 200) {
      throw new Error("Failed to fetch data");
    }
    return response.data.DATA;
  }

  parseDATA(rawString) {
    const lines = rawString.split("\n");

    const headers = lines[0].split("|");
    const rows = lines.slice(1);

    return rows.map((row) => {
      const values = row.split("|");

      const obj = {};
      headers.forEach((header, index) => {
        obj[header] = values[index];
      });

      return obj;
    });
  }

  async getAll() {
    const raw = await this.fetchRawData();
    return this.parseDATA(raw);
  }

  async searchBy(field, value) {
    const data = await this.getAll();

    return data.filter((item) => {
      if (!item[field] || !value) return false; // skip kalau undefined
      return item[field].toLowerCase().includes(value.toLowerCase());
    });
  }
}

module.exports = new StudentService();
