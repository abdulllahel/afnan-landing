T={'lattice':'family=Plus+Jakarta+Sans:wght@400;500;600;800','superhuman':'family=Geist:wght@300;400;500;600','folk':'family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;1,9..144,400&family=DM+Sans:wght@400;500;600','maven':'family=Sora:wght@500;600;700&family=Manrope:wght@400;500;600;700'}
s=open('kit.tpl').read()
for k,f in T.items():
    open(k+'.html','w').write(s.replace('%%THEME%%',k).replace('%%FONTS%%',f))
