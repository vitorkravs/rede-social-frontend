const AuthPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-[url('https://static.vecteezy.com/ti/vetor-gratis/p1/9982196-fundo-abstrato-botanico-para-paginas-da-web-banners-com-folhas-e-salpicos-fundo-editavel-vetor.jpg')] bg-no-repeat bg-cover flex min-h-screen flex-col items-center justify-center">
      <form className="flex flex-col bg-white px-6 py-14 rounded-2xl gap-11 text-gray-600 w-1/4">
        {children}
      </form>
    </main>
  );
};

export default AuthPage;
