const fs = require("fs");

// Fix Node 24 Windows regression where readlink returns EISDIR instead of EINVAL on regular files
const origReadlink = fs.readlink;
fs.readlink = function (path, opt, cb) {
  if (typeof opt === "function") {
    cb = opt;
    opt = {};
  }
  return origReadlink.call(fs, path, opt, (err, link) => {
    if (err && (err.code === "EISDIR" || err.code === "UNKNOWN")) {
      err.code = "EINVAL";
    }
    if (cb) cb(err, link);
  });
};

const origReadlinkSync = fs.readlinkSync;
fs.readlinkSync = function (path, opt) {
  try {
    return origReadlinkSync.call(fs, path, opt);
  } catch (err) {
    if (err && (err.code === "EISDIR" || err.code === "UNKNOWN")) {
      err.code = "EINVAL";
    }
    throw err;
  }
};

if (fs.promises && fs.promises.readlink) {
  const origPromisesReadlink = fs.promises.readlink;
  fs.promises.readlink = async function (path, opt) {
    try {
      return await origPromisesReadlink.call(fs.promises, path, opt);
    } catch (err) {
      if (err && (err.code === "EISDIR" || err.code === "UNKNOWN")) {
        err.code = "EINVAL";
      }
      throw err;
    }
  };
}
