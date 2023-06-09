import { promisify } from "util";
import download from "download-git-repo";
import ora from "ora";

export default async (repo, desc) => {
  // 借助ora创建进度条
  const process = ora(`下载...${repo}`);
  process.start();
  // 等待下载结束，注意需要进行promise化，才能使用await
  await promisify(download)(repo, desc);
  process.succeed();
};
