for (const index = 0; index < 10; index++) {
  await Deno.mkdir("Lab %s", index);
}
